window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const cost = document.getElementById('original-cost');
  const price = document.getElementById('selling-price');

  const data = document.querySelector('[data-id="test"]');

  console.log(data);

  let tb = document.getElementById('table-body');

  document.getElementById('publish').addEventListener('click', publish);

  function publish(ev) {
    ev.preventDefault();

    if (make.value.length > 0 &&
      model.value.length > 0 &&
      year.value.length > 0 &&
      fuel.value.length > 0 &&
      cost.value.length > 0 &&
      price.value.length > 0 &&
      Number(cost.value) < Number(price.value)) {
      let tr = document.createElement('tr');
      tr.className = 'row';
      let td1 = document.createElement('td');
      td1.textContent = make.value;
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      td2.textContent = model.value;
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      td3.textContent = year.value;
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      td4.textContent = fuel.value;
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      td5.textContent = cost.value;
      tr.appendChild(td5);
      let td6 = document.createElement('td');
      td6.textContent = price.value;
      tr.appendChild(td6);

      let tdB = document.createElement('td');
      let edit = document.createElement('button');
      edit.className = 'action-btn edit';
      edit.textContent = 'Edit';
      tdB.appendChild(edit);
      edit.addEventListener('click', editStuff);

      let sell = document.createElement('button');
      sell.className = 'action-btn sell';
      sell.textContent = 'Sell';
      tdB.appendChild(sell);
      sell.addEventListener('click', sellStuff);
      tr.appendChild(tdB);
      tb.appendChild(tr);

      make.value = '';
      model.value = '';
      year.value = '';
      fuel.value = '';
      cost.value = '';
      price.value = '';
    }
  }

  function editStuff() {
    const tr = document.querySelector('tr[class="row"]');
    tb.removeChild(tr);

    const arr = Array.from(tr.children);

    make.value = arr[0].textContent;
    model.value = arr[1].textContent;
    year.value = arr[2].textContent;
    fuel.value = arr[3].textContent;
    cost.value = arr[4].textContent;
    price.value = arr[5].textContent;
  }

  function sellStuff() {
    const tr = document.querySelector('tr[class="row"]');
    tb.removeChild(tr);

    const arr = Array.from(tr.children);

    let list = document.createElement('li');
    list.className = 'each-list';

    let span1 = document.createElement('span');
    span1.textContent = arr[0].textContent + ' ' + arr[1].textContent;
    list.appendChild(span1);

    let span2 = document.createElement('span');
    span2.textContent = arr[2].textContent;
    list.appendChild(span2);

    let span3 = document.createElement('span');
    span3.textContent = Number(arr[5].textContent) - Number(arr[4].textContent);
    list.appendChild(span3);
    document.getElementById('cars-list').appendChild(list);

    let sum = document.getElementById('profit');
    sum.textContent = '';
    sum.textContent += Number(span3.textContent).toFixed(2);
  }
}
