menu = document.getElementById('menu');
closeHiddenMenu = document.getElementById('closeHiddenMenu');
hiddenMenu = document.getElementById('hiddenMenu');
navInnerLeftImageBackground = document.getElementById('navInnerLeftImageBackground');
firstRowRightFirstPic = document.getElementById('firstRowRightFirstPic');

xboxContainer = document.getElementById('xboxContainer');
xbox = document.getElementById('xbox');

basketball = document.getElementById('basketball');
basketballContainer = document.getElementById('basketballContainer');

vscode = document.getElementById('vscode');
vscodeContainer= document.getElementById('vscodeContainer');

xboxSection = document.getElementById('xboxSection');
basketballSection = document.getElementById('basketballSection');
vscodeSection = document.getElementById('vscodeSection');

firstRow = document.getElementById('firstRow');
secondRow = document.getElementById('secondRow');

menu.onclick= function(){
    if( hiddenMenu.style.right !== '0%'){
        hiddenMenu.style.right = '0%'
        hiddenMenu.style.transition = '.5s';
        hiddenMenu.style.backgroundColor = '#17bace';
        menu.style.width = '0';
        menu.style.transition = '.3s';
        closeHiddenMenu.style.width = '37px';
        closeHiddenMenu.style.transition = '.3s';
    }
}

closeHiddenMenu.onclick= function(){
    if( hiddenMenu.style.right == '0%'){
        hiddenMenu.style.right = '-100%'
        hiddenMenu.style.transition = '.5s';
        hiddenMenu.style.backgroundColor = 'transparent';
        menu.style.width = '37px';
        menu.style.transition = '.3s';
        closeHiddenMenu.style.width = '0';
        closeHiddenMenu.style.transition = '.3s';
    }
}

window.onresize = function (){
    if((window.innerWidth) <= 1023 ){
        menu.style.width = '37px';
        secondRow.style.top = '0px';
        secondRow.style.opacity = '100%';
        
    }
    else{
        menu.style.width = '0';
        closeHiddenMenu.style.width = '0';
        hiddenMenu.style.right = '-100%';

    }
}

window.onload = function (){
    menu.style.width = '0px';
    closeHiddenMenu.style.width = '0px';
}

navInnerLeftImageBackground.onmouseover = function (){
    navInnerLeftImageBackground.style.rotate = '360deg';
    navInnerLeftImageBackground.style.transition = '.5s';
}

navInnerLeftImageBackground.onmouseout = function (){
    navInnerLeftImageBackground.style.rotate = '-360deg';
    navInnerLeftImageBackground.style.transition = '.5s';
}


xboxContainer.onmouseover = function (){
    xbox.style.top = '20px';
    xbox.style.transition = '.5s';
    xbox.style.width = '50px';
    xbox.style.height = '50px';
    xboxSection.style.transition = '.5s';
    xboxSection.style.opacity = '100%';
    xboxSection.style.height = 'calc(70% + 30%)';
}
xboxContainer.onmouseout = function (){
    xbox.style.top = '100px';
    xbox.style.transition = '.5s';
    xbox.style.width = '100px';
    xbox.style.height = '100px';
    xboxSection.style.transition = '.2s';
    xboxSection.style.opacity = '0%';
    xboxSection.style.height = 'calc(100% - 30%)';
}

basketballContainer.onmouseover = function (){
    basketball.style.top = '20px';
    basketball.style.width = '50px';
    basketball.style.height = '50px';
    basketball.style.transition = '.5s';
    basketballSection.style.transition = '.5s';
    basketballSection.style.opacity = '100%';
    basketballSection.style.height = 'calc(70% + 30%)';
}
basketballContainer.onmouseout = function (){
    basketball.style.top = '100px';
    basketball.style.width = '100px';
    basketball.style.height = '100px';
    basketball.style.transition = '.5s';
    basketballSection.style.transition = '.2s';
    basketballSection.style.opacity = '0%';
    basketballSection.style.height = 'calc(100% - 30%)';
}

vscodeContainer.onmouseover = function (){
    vscode.style.top = '20px';
    vscode.style.width = '50px';
    vscode.style.height = '50px';
    vscode.style.transition = '.5s';
    vscodeSection.style.transition = '.5s';
    vscodeSection.style.opacity = '100%';
    vscodeSection.style.height = 'calc(70% + 30%)';
}
vscodeContainer.onmouseout = function (){
    vscode.style.top = '100px';
    vscode.style.width = '100px';
    vscode.style.height = '100px';
    vscode.style.transition = '.5s';
    vscodeSection.style.transition = '.5s';
    vscodeSection.style.opacity = '0%';
    vscodeSection.style.height = 'calc(100% - 30%)';
}

firstRow.onmouseout = function (){
    secondRow.style.top = '0px';
    secondRow.style.opacity = '100%';
    secondRow.style.transition = '1.5s';
}