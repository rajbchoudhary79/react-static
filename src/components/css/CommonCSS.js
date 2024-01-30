import { pallete } from "./Theme";

export const styles = {
  flexDRS: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexDRC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  flexDCC: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  flexDC: {
    display: "flex",
    flexDirection: "column",
  },
  flexDR: {
    display: "flex",
    flexDirection: "row",
  },
  buttonMain: {
    backgroundColor: pallete.parimayBlue,
    color: pallete.primaryWhite,
    textTransform: "none",
    padding: "10px 30px",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  imagesBox: {
    width: "100%", // Responsive width
    maxWidth: 400, // Maximum width
    height: "auto", // Maintain aspect ratio
  },
};
