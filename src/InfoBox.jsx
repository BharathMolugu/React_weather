import Card from "@mui/material/Card";
import "./InfoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const Init_Url =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1688804790295-8356369391ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://media.istockphoto.com/id/520773327/photo/caution-heavy-rain.jpg?s=612x612&w=is&k=20&c=U58Rc_3ETHz8ZEwat0mvno_GpI082fWZ2_jy5rqRU44=";
  return (
    <div className="InfoBox">
      <div className="cardConatiner">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp} &deg;C</p>
              <p>Temp Max = {info.tempMAX} &deg;C </p>
              <p>Temp Min = {info.tempMIN} &deg;C </p>
              <p>Humidity = {info.humidity} &deg;C </p>
              {/* <p>feels_like = {info.feelslike} &deg;C </p> */}
              {/* <p>Weather = {info.weather} </p> */}
              <p>
                the weather can be described as <i>{info.weather} </i> and feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
