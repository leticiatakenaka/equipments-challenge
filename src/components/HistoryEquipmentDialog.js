import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { formatDate } from "./formatDate";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function HistoryEquipmentDialog(props) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (props.eqp) {
      setIsLoaded(true);
    }
  }, [props]);

  return isLoaded ? (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.close}
        aria-describedby="alert-dialog-slide-description"
        style={{ marginTop: "30%" }}
      >
        <DialogTitle>{props.eqp.equipment}</DialogTitle>
        <DialogContent>
          {props.eqp.list
            .slice(0)
            .reverse()
            .map((history, i) => (
              <DialogContentText key={i} id="alert-dialog-slide-description">
                {`${history.name} => ${formatDate(history.date)}`}
              </DialogContentText>
            ))}
        </DialogContent>
      </Dialog>
    </div>
  ) : (
    ""
  );
}
