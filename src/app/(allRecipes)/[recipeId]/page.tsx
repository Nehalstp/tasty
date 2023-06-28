export default function Recipe({params}:{params:{recipeId: string, recipeName: string}}) {
  return (
    <div>{params.recipeName}</div>
  )
}
