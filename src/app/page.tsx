

export default function Home() {

  const data = [{name:"Ratan lai", age: 29}];
  // let addData = () {
  //   data.push({})
  //}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Redux toolkit</h1>
    {data[0].age}
    </main>
  )
}
