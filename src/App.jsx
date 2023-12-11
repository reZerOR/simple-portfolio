import "./App.css";
import Banner from "./Comoponents/Banner";

function App() {
  const downloadCV = () => {
    // Replace 'your_cv_url.pdf' with the actual URL of your CV file
    const cvUrl = "/cv.pdf";

    // Creating an 'a' element to trigger the download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "your_cv_name.pdf"; // The name your CV will have when downloaded
    link.click();
  };
  return (
    <>
      <Banner></Banner>
    </>
  );
}

export default App;
