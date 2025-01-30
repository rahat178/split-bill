gsap.from(".navbar", {y: -100, ease: "power1", duration: 1.5})

const button = document.querySelector('.btn-calc');
button.addEventListener('click', culculateAmount);

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", reloadPage);

function reloadPage() {
    location. reload();
}

function culculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#inputGroupSelect01').value;

    if (bill === '' || people === '' || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Enter data!'
          })
    }

    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip) / people;
    let totalSum = amountPerPerson + tipPerPerson;
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPerson;
    document.querySelector('#dividedTip').textContent = tipPerPerson;
    document.querySelector('#billAndTip').textContent = totalSum;
}