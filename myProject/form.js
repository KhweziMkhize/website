const scriptURL = 'https://script.google.com/macros/s/AKfycby58mI9r0JPrIRZ_7QhRmKchMJAyir9a8C6OXld901VCUw2NoXG-gDHoPeXBVgPB1vNEg/exec';
const form = document.forms['contactForm'];

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });

    const result = await response.json();

    if (result.result === 'success') {
      alert("Thank you!!! VHM has received your form. Please check your email.");
      window.location.reload();
    } else {
      throw new Error(result.error || "An unknown error occurred.");
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert("Something went wrong. Please try again later.");
  }
});

