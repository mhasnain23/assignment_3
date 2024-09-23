const Card = (props: any) => {
  return (
    <div className="flex flex-col pl-5 items-start justify-center border-2 w-52 h-24">
      <h2>Name: {props.name}</h2>
      <h2>Id: {props.Id}</h2>
      <h2>Day: {props.day}</h2>
    </div>
  );
};

export default Card;
