var tabButton = document.querySelectorAll("#articulo .button-container button");
var tabPanels = document.querySelectorAll("#articulo .tab-panel");

function showPanel(panelIndex, colorCode)
{
    tabButton.forEach(function(node)
    {
        node.style.backgroundColor = "";
        node.style.color="";
    });
    tabButton[panelIndex].style.backgroundColor = colorCode;
    tabButton[panelIndex].style.color = "white";

    tabPanels.forEach(function(node)
    {
        node.style.display = "none";
    });
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0,'#241663');