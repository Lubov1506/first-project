export const selectStyles = {
  control: (provided) => ({
    ...provided,
    position: "relative",
    border: "none",
    minHeight: "32px",
    boxShadow: "none",
    margin: "0px",
    "&:hover": {
      border: "none",
    },
    overflow: "auto",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "&:hover": {
      boxShadow:
        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    },
    "&:focus": {
      boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
  }),
  input: (provided) => ({
    ...provided,
    position: "absolute",
    border: "none",
    padding: "4px 0px",
    margin: "0px",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
    padding: "0px",
  }),
  menu: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    overflow: "auto",
  }),
  menuList: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    border: "none",
    "z-index": "9999",
    borderRadius: "4px",
    scrollBehavior: "smooth",
    textAlign: "left",
    padding: "2px 6px",
    minHeight: "32px",
    height: "32px",
    transition: "all 0.2s",
    boxShadow: "none",
    backgroundColor: state.isSelected
    ? "rgb(0, 95, 90)"
    : state.isFocused || state.isActive
    ? "rgb(0, 150, 137)"
    : 'transparent',
    "&:hover": {
      border: "none",
      color: "rgb(255, 255, 255)",
    },
    "&:focus": {
        border: "none",
        backgroundColor: "rgb(0, 150, 137)",
        color: "rgb(255, 255, 255)",
      },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    border: "none",
    margin: "0px",

    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    border: "none",
    margin: "0px",
    color: "rgb(203,206,212)",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    border: "none",
    padding: "0px",

  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  inputContainer: (provided) => ({
    ...provided,
    border: "2px solid red",
    padding: "0px",
    margin: "0px",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
}
