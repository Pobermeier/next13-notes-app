type SpinnerProps = {
  isActive?: boolean;
};

const Spinner = ({ isActive = false }: SpinnerProps) => (
  <div
    className={["spinner", isActive && "spinner--active"].join(" ")}
    role="progressbar"
    aria-busy={isActive}
  />
);

export default Spinner;
