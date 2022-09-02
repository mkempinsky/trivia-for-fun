const fetchQuestions = async (categoryId) => {
    let questions = [];

    const category = categoryId ? `&category=${categoryId}` : '';

    const url = `https://opentdb.com/api.php?amount=10&type=multiple${category}`;

    await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            questions = data?.results || [];
        });

    return questions;
};
export default fetchQuestions;
