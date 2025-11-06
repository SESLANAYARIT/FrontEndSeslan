  // export const formatDate = (dateString: string) => {
  //   return new Date(dateString).toLocaleDateString("es-ES", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  export const formatDate = (date: string) =>
    date.split("T")[0].split("-").reverse().join("/");