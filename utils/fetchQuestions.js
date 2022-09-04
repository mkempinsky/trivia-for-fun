const fetchQuestions = async (categoryId, difficulty) => {
    let questions = [];

    const categoryParam = categoryId ? `&category=${categoryId}` : '';
    const difficultyParam = difficulty ? `&difficulty=${difficulty}` : '';

    const url = `https://opentdb.com/api.php?amount=10&type=multiple${categoryParam}${difficultyParam}`;
    await fetch(url)
        .then((res) => res.json())
        .then((data) => {
            questions = data?.results || [];
        });

    return questions;
};
export default fetchQuestions;
