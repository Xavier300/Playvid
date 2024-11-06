let links = [
  'https://www.profitablecpmrate.com/sy8krbtevg?key=0e1deac5fa3e4a60a04d89c371af366d', // Dito ilalagay Direct Link
  'https://www.profitablecpmrate.com/g8mfzna2u?key=d31037a22cb8f7e561754044bc4859d2', // Dito ilalagay Direct Link
  'https://www.profitablecpmrate.com/p0vvwn0ktx?key=9aacc8426e5c69719e78ea980f94074f', // Dito ilalagay Direct Link
  'https://www.profitablecpmrate.com/rkh2zxn9yy?key=981b74d297ed797ff9c900d8be488a85' // Dito ilalagay Direct Link
];
  let currentIndex = 0;
  let autoNavigateInterval;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function refreshPage(interval = 250000) {
    setInterval(() => {
      location.reload();
    }, interval);
  }

  function showLink(index) {
  const iframe = document.getElementById('modalIframe');
  const modal = document.getElementById('myModal');
  const spinner = document.getElementById('spinner');
  iframe.src = links[index];
  modal.style.display = 'flex';
  spinner.style.display = 'block';
  iframe.onload = () => {
    spinner.style.display = 'none';
  };
  clearInterval(autoNavigateInterval);
  autoNavigateInterval = setInterval(() => {
    navigate(1);
  }, Math.floor(Math.random() * (40000 - 30000 + 1) + 30000));
} // <-- Missing closing brace added here

function navigate(direction) {
  currentIndex = (currentIndex + direction + links.length) % links.length;
  showLink(currentIndex);
}

function goToSite() {
  window.open(links[currentIndex], '_blank');
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.getElementById('modalIframe').src = '';
  document.getElementById('fallback').style.display = 'flex';
  clearInterval(autoNavigateInterval);
}

function reopenModal() {
  showLink(currentIndex);
}

window.onload = function () {
  shuffleArray(links);
  refreshPage();
  showLink(currentIndex);
};
