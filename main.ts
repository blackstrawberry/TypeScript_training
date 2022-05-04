type People = {
  name:string,
  age?: number|0
}
const player : People = {
  name:"jonghan"
}

function MakePerson(name:string) : People {
  return{
    name
  }
}

const MakePersonMk2 = (name:string) : People => ({name});

let BKS = MakePerson("jonghan");
BKS.age = 26;

let yuk = MakePersonMk2("jihyeon");
yuk.age = 24;

