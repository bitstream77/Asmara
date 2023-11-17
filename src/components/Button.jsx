/* eslint-disable react/prop-types */

function Button({ content }) {
  return (
    <>
      <button className="m-2 hover:text-fuchsia-400 rounded-md border p-2 transition-colors active:text-fuchsia-800 bg-neutral-950 border-fuchsia-700">
        {content}
      </button>
    </>
  );
}

export default Button;
