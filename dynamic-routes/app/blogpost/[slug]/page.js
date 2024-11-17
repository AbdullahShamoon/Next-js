export default async function Page({ params }) {

    // Use this :-
    // const slug = (await params).slug
    // return <div>My Post: {slug}</div>

    //Or this:-
    // return <div>My Post: {params.slug}</div>

    //Another use case :-
    let languages = ["python", "java", "c", "cpp", "javascript"];
    if (languages.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    }
    else {
        return <div>NO posts Found</div>
    }

}