
export default function Greet({nameji}:{nameji:String}){
    return <div>
        `hello ${nameji}`
    </div>
}

const a=Greet("pawan")
console.log(a);