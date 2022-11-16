window.onload=() => {
    const [input,output]=document.querySelectorAll(".codemirror-textarea");
    const [run,clear]=document.querySelectorAll("button");

    //config
    const editor= CodeMirror.fromTextArea(input,{lineNumbers:true});
    const shell = CodeMirror.fromTextArea(output,{lineNumbers:false});

    run.addEventListener("click",() =>{
        const codeToRun =editor.getValue();
        try {
            shell.replaceRange('$ '+ eval(`${codeToRun}`) + "\n",CodeMirror.Pos(shell.lastLine()));
        } catch (e) {
            shell.replaceRange('$ '+ e + "\n",CodeMirror.Pos(shell.lastLine()));
        }
    });

    clear.addEventListener("click", _ => shell.setValue(""))
}