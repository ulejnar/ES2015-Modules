function choice(items) {
  let randomIdx = Math.floor(Math.random()*items.length);
  return items[randomIdx];
}

function remove(items, item) {

  let index = items.indexOf(item)
  if (index !== -1) {
    return items.splice(index, 1)[0]
  }
  return undefined;
}

export {choice, remove};