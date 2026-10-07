// MIT License. Behavioral checks for planning only; Adobe execution is separate.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'scripts/lib/print_core.jsxinc'),'utf8'),context);
new vm.Script(fs.readFileSync(path.join(root,'scripts/Print_Recipes.jsx'),'utf8').replace(/^#target illustrator\s*/m,''));
const P=context.PrintRecipes;
function doc(count=40){
 const layer={name:'ARTWORK',locked:false,visible:true,printable:true,pageItems:[]};
 const artboards=Array.from({length:count},(_,i)=>({name:`LF-${String(Math.floor(i/2)+1).padStart(2,'0')}-${i%2?'BACK':'FRONT'}`,artboardRect:[i*200,100,i*200+100,0]}));
 layer.pageItems=artboards.map(a=>({name:a.name,typename:'GroupItem',parent:layer,hidden:false,locked:false,visibleBounds:[...a.artboardRect]}));
 return {artboards,layers:[layer]};
}
let passed=0;function check(name,fn){fn();passed++;console.log('PASS '+name);}
function rejected(change,per=5,bleed=3,native=true){const d=doc();change(d);assert.throws(()=>P.plan(d,per,bleed,native));}
check('20 variants become four ten-side batches',()=>{const p=P.plan(doc(),5,3,true);assert.equal(p.pairs,20);assert.equal(p.batches.length,4);assert.equal(p.batches[3].range,'31-40');});
check('last partial batch retains both sides',()=>{const p=P.plan(doc(),6,3,true);assert.equal(p.batches[3].range,'37-40');});
check('front/back swaps stop',()=>rejected(d=>{d.artboards[0].name='LF-01-BACK';}));
check('odd side count stops',()=>assert.throws(()=>P.plan(doc(39),5,3,false)));
check('zero batch stops',()=>rejected(()=>{},0));
check('fractional batch stops',()=>rejected(()=>{},1.5));
check('infinite batch stops',()=>rejected(()=>{},Infinity));
check('negative bleed stops',()=>rejected(()=>{},5,-1));
check('nonfinite bleed stops',()=>rejected(()=>{},5,NaN));
check('out-of-range bleed stops',()=>rejected(()=>{},5,26));
check('missing groups stop native split',()=>rejected(d=>{d.layers[0].pageItems.pop();}));
check('duplicate side group stops',()=>rejected(d=>{d.layers[0].pageItems[1].name=d.layers[0].pageItems[0].name;}));
check('cross-side artwork stops',()=>rejected(d=>{d.layers[0].pageItems[0].visibleBounds[2]=300;}));
check('extra layers stop native split',()=>rejected(d=>{d.layers.push({name:'extra'});}));
check('hidden source group stops',()=>rejected(d=>{d.layers[0].pageItems[0].hidden=true;}));
check('locked source layer stops',()=>rejected(d=>{d.layers[0].locked=true;}));
check('PDF mode supports ungrouped artwork',()=>{const d=doc();d.layers=[];assert.equal(P.plan(d,5,3,false).batches.length,4);});
check('planning preserves source structure',()=>{const d=doc(),names=d.artboards.map(x=>x.name),groups=[...d.layers[0].pageItems];P.plan(d,5,3,true);assert.deepEqual(d.artboards.map(x=>x.name),names);assert.deepEqual(d.layers[0].pageItems,groups);});
check('touching sides stop with positive bleed',()=>rejected(d=>{d.artboards[1].artboardRect=[100,100,200,0];},5,3,false));
check('excess bleed crossing the next side stops',()=>rejected(()=>{},5,25.4,false));
console.log(JSON.stringify({tests:passed,passed,failed:0,scope:'planning_and_ES3_script_syntax_only'}));
