import hero from "../assets/hero.png";
export default function ProImage() {
    return (
      <div>
        <img src={hero} className="w-full max-h-[600px] object-cover" alt="Hero" />
      </div>
    );
  }
  