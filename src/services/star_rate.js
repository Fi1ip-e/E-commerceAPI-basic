export function starRate(rate) {
    const maxStars = 5;
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.3 && rate % 1 < 0.8;

    let html = '';
    for (let i = 1; i <= maxStars; i++) {
        if (i <= fullStars) {
            html += `<img src="./img/basic-star-total.png" class="star-total" />`;
        } else if (i === fullStars + 1 && hasHalfStar) {
            html += `<img src="./img/basic-star-meia.png" class="star-meia" />`;
        } else {
            html += `<img src="./img/basic-star.png" class="star-basic" />`;
        }
    }

    return html;
}