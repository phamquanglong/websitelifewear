import Dropdown from "react-dropdown";

let Gender = (props) => {
  let { value, setValue } = props;

  let gender = value == 0 ? "Nam" : "Nữ";

  const gd = ["Nam", "Nữ"];

  return (
    <div className="flex flex-row mx-5 mt-5 items-center">
      <p style={{ minWidth: 150 }}>Giới tính</p>
      <Dropdown
        className="flex-1"
        options={gd}
        onChange={(value) => setValue(value)}
        value={gender}
      />
    </div>
  );
};

export default Gender;
