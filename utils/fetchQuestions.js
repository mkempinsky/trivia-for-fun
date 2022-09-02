const fetchQuestions = async (level, category) => {
    let questions = [];

    await fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)
        .then((res) => res.json())
        .then((data) => {
            questions = data?.results || [];
        });

    return questions;
};
export default fetchQuestions;
