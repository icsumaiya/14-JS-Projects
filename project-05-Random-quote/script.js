const myQuotes = [
    "স্বপ্ন সেটা নয় যা মানুষ ঘুমিয়ে দেখে, স্বপ্ন সেটা যা মানুষকে ঘুমাতে দেয় না।",
    "সাফল্যের কোনো শর্টকাট নেই, কঠোর পরিশ্রমই একমাত্র পথ।",
    "নিজের ওপর বিশ্বাস রাখো, অর্ধেক বিজয় তখনই হয়ে যায়।",
    "ভুল করা মানেই কিছু শেখা, তাই ভুল করতে ভয় পেয়ো না।",
    "আজকের কাজ কালকের জন্য ফেলে রেখো না।"
];

const displayArea = document.getElementById('quoteDisplay');
const triggerBtn = document.getElementById('newQuoteBtn');

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * myQuotes.length);
    displayArea.innerText = myQuotes[randomIndex];
}

triggerBtn.addEventListener('click', showRandomQuote);