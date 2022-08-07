import { colors } from "../colors";

var Quantity = (props) => {
  var { quantity, setQuantity, updateQuantity } = props;

  let update = (num) => {
    setQuantity(num);
    updateQuantity(num);
  };

  return (
    <div className="flex items-center rounded-full border w-fit h-fit">
      <button
        className={`p-2 bg-gray-200 px-4 rounded-l-full hover:text-${colors.primary}`}
        onClick={() =>
          updateQuantity === undefined
            ? setQuantity(quantity + 1)
            : update(quantity + 1)
        }
      >
        +
      </button>
      <input
        className="text-center focus:outline-none w-14"
        value={quantity}
        onChange={(text) => setQuantity(Number(text.target.value))}
      />
      <button
        className={`p-2 bg-gray-200 px-4 rounded-r-full hover:text-${colors.primary}`}
        disabled={quantity <= 1}
        onClick={() =>
          updateQuantity === undefined
            ? setQuantity(quantity - 1)
            : update(quantity - 1)
        }
      >
        -
      </button>
    </div>
  );
};

export default Quantity;
