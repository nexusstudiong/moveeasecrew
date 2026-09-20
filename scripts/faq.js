const questions = document.querySelectorAll('.faqc');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Get the corresponding answer
    const answer = question.nextElementSibling;

    // Toggle the clicked question
    const isVisible = answer.style.display === 'block';
    
    // Hide all answers
    document.querySelectorAll('.faqans').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faqc').forEach(q => q.classList.remove('activee'));

    // If it was not visible, show it
    if (!isVisible) {
      answer.style.display = 'block';
      question.classList.add('activee');
    }
  });
});