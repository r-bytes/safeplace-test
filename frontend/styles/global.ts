import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
  titleText: {
    marginBottom: 50,
    fontSize: 56,
    opacity: 0.6,
    fontWeight: "bold",
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  details: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: 16,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 200,
  },
  test: {
    opacity: 0.5,
    textAlign: "center",
    fontSize: 16,
    marginTop: 100,
  },
})

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 32,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
})