import FeaturedGrid from "@/components/featured-grid";
import FeaturedAlbums from "./_components/featured-albums";
import Header from "./_components/header";
import Hero from "./_components/hero";
import UpcomingShows from "./_components/upcoming-shows";
import Footer from "./_components/footer";
import LatestAlbums from "./_components/latest-albums";
import FeaturedSongs from "./_components/featured-songs";

//method call of home-2 page
const Home2 = () => {
  return (
    <div className="text-base h-[200vh] text-white">
      <Header />
      <Hero />
      <FeaturedSongs />
      <LatestAlbums />
      <FeaturedAlbums />
      <FeaturedGrid />
      <UpcomingShows />
      <Footer />
    </div>
  );
};
export default Home2;
