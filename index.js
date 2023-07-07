const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <h1 className="social-heading">Social Buttons</h1>
    <div className="mini-button-container">
      <Button className="button like-button" name="Like" />
      <Button className="button comment-button" name="Comment" />
      <Button className="button share-button" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
