interface Props {
  child: "react" | "vue" | "svelte" | "solid";
}

const Framework = ({ child }: Props) => {
  return <div className=''></div>;
};

export default Framework;
