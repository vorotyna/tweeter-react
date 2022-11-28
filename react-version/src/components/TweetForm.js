function TweetForm() {
  const string = "What are you humming about?";
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={(event) => event.preventDefault()}>
        <textarea
          className="form__textarea"
          name="text"
          placeholder={string}
        ></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;