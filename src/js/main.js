async function loadSection(filePath, elementId) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Error loading file ${filePath}: ${response.statusText}`);
        }

        const html = await response.text();
        const element = document.getElementById(elementId);

        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("header")) {
        loadSection('/src/components/header.html', 'header');
    }
    if (document.getElementById("hero")) {
        loadSection('/src/components/hero.html', 'hero');
    }
    if (document.getElementById("about-me")) {
        loadSection('/src/components/about.html', 'about-me');
    }
    if (document.getElementById("art-collections")) {
        loadSection('/src/components/collections.html', 'art-collections');
    }
    if (document.getElementById("footer")) {
        loadSection('/src/components/footer.html', 'footer');
    }
});

function toggleLanguage() {
    alert("Language toggle will be implemented soon!");
}
