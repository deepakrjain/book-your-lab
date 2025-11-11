document.querySelectorAll('.track-btn').forEach(button => {
  button.addEventListener('click', () => {
    const track = document.getElementById(button.dataset.track);
    if (!track) return;
    const step = track.clientWidth * 0.8;
    track.scrollBy({ left: step * Number(button.dataset.dir), behavior: 'smooth' });
  });
});
