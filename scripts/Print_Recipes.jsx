#target illustrator
/* MIT License. Copyright 2026 bloglluukk-glitch. */
(function(){
    var core=new File(File($.fileName).parent.fsName+'/lib/print_core.jsxinc');
    if(!core.exists){alert('Keep scripts/lib beside this script / scripts/lib 폴더를 함께 보관하세요.');return;}
    $.evalFile(core);
    var texts={ko:{title:'인쇄물 정리 레시피',language:'언어 / Language',action:'할 작업',
        actions:['더미 리플렛 20종 만들기','편집용 AI 사본 축소','양면 리플렛 PDF 묶음 분리','독립 그룹 AI + PDF 묶음 분리'],
        batch:'한 파일에 넣을 종류 수',bleed:'도련 (mm) — 인쇄소 사양 우선',run:'실행',cancel:'닫기',
        info:'새 폴더에 사본만 만듭니다.\n분리: LF-01-FRONT, LF-01-BACK 순서.\nAI 분리: ARTWORK 레이어와 면별 같은 이름의 독립 그룹.\nPDF: 도련 포함 검토 캔버스, 별도 재단 TrimBox 없음.\n인쇄소 최종 설정과 양면 배치는 별도로 확인하세요.',
        source:'저장한 AI 원본을 Illustrator에서 먼저 여세요.',folder:'새 결과를 저장할 상위 폴더',done:'완료. 결과 폴더: '},
        en:{title:'Print Production Recipes',language:'Language / 언어',action:'Action',
        actions:['Create 20 dummy duplex leaflets','Compact an editable AI copy','Split duplex PDF batches','Split grouped native AI + PDF batches'],
        batch:'Leaflet variants per batch',bleed:'Bleed (mm) — use printer specification',run:'Run',cancel:'Close',
        info:'Creates copies in a new job folder.\nSplit order: LF-01-FRONT, LF-01-BACK.\nNative split: one ARTWORK layer and independently named side groups.\nPDF: full-bleed review canvas; no separate trim-size TrimBox.\nCheck final printer settings and duplex imposition separately.',
        source:'First open a saved AI source in Illustrator.',folder:'Choose parent folder for new outputs',done:'Done. Output folder: '}};
    var win=new Window('dialog','Print Production Recipes');win.orientation='column';win.alignChildren='fill';
    var lg=win.add('group'), languageLabel=lg.add('statictext',undefined,'언어 / Language');
    var lang=lg.add('dropdownlist',undefined,['한국어','English']);lang.selection=0;
    var actionLabel=win.add('statictext',undefined,'');var action=win.add('dropdownlist',undefined,[]);
    var bg=win.add('group'), batchLabel=bg.add('statictext',undefined,''), batch=bg.add('edittext',undefined,'5');batch.characters=5;
    var blg=win.add('group'), bleedLabel=blg.add('statictext',undefined,''), bleed=blg.add('edittext',undefined,'3');bleed.characters=5;
    var info=win.add('statictext',undefined,'',{multiline:true});info.preferredSize=[610,150];
    var buttons=win.add('group'), run=buttons.add('button',undefined,''), cancel=buttons.add('button',undefined,'',{name:'cancel'});
    function current(){return texts[lang.selection.index===0?'ko':'en'];}
    function refresh(){var t=current(),idx=action.selection?action.selection.index:0;
        win.text=t.title;languageLabel.text=t.language;actionLabel.text=t.action;
        action.removeAll();for(var i=0;i<t.actions.length;i++)action.add('item',t.actions[i]);action.selection=idx;
        batchLabel.text=t.batch;bleedLabel.text=t.bleed;info.text=t.info;run.text=t.run;cancel.text=t.cancel;win.layout.layout(true);}
    lang.onChange=refresh;
    run.onClick=function(){
        var t=current(), index=action.selection.index;
        if(index!==0 && app.documents.length===0){alert(t.source);return;}
        var per=Number(batch.text), b=Number(bleed.text);
        if(index>=2 && (!/^\d+$/.test(batch.text)||per<1||!isFinite(b)||b<0||b>25.4)){alert('Check batch and bleed values / 묶음 크기와 도련을 확인하세요.');return;}
        var parent=Folder.selectDialog(t.folder);if(!parent)return;
        try {
            var folder;
            if(index===0){folder=new Folder(parent.fsName+'/dummy-leaflets-'+(new Date()).getTime());if(!folder.create())throw Error('Cannot create folder');PrintRecipes.makeDemo(new File(folder.fsName+'/dummy-master.ai'));}
            else if(index===1)folder=PrintRecipes.compact(app.activeDocument,parent);
            else folder=PrintRecipes.split(app.activeDocument,parent,per,b,index===3);
            alert(t.done+folder.fsName);win.close(1);
        }catch(e){alert('Stopped / 중단: '+e.message+'\nExisting source and outputs are preserved / 기존 원본과 결과는 보존됩니다.');}
    };
    refresh();win.show();
})();
