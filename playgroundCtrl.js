const currentTabs = [...document.querySelectorAll('.tab-menu>.tab-item')];
const currentPaneContent = [...document.querySelectorAll('.tab-content>.tab-pane')];
let results, contentResults;
for (const tab in currentTabs) {
    currentTabs[tab].addEventListener('click', event => {
        let activeTab = event.target;
        activeTab.classList.add('active');
        results = currentTabs.filter(tab => tab !== event.target);
        removeActiveStatus(results);
        updatePaneContent(activeTab.id);
    });
}

function removeActiveStatus(elements) {
    elements.forEach(element => {
        element.classList.remove('active');
    });
}

function updatePaneContent(id) {
    let activePane = document.getElementById('tab' + id);
    contentResults = currentPaneContent.filter(pane => pane !== activePane);
    removeActiveStatus(contentResults);
    activePane.classList.add('active');
}
