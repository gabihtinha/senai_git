document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#FF33F6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
