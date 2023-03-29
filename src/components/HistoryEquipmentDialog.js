import * as React from "react";

import * as MU from "@mui/material";
import { formatDate } from "./formatDate";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <MU.Slide direction="up" ref={ref} {...props} />;
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
      <MU.Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.close}
        aria-describedby="alert-dialog-slide-description"
        style={{ marginTop: "30%" }}
      >
        <MU.DialogTitle>{props.eqp.equipment}</MU.DialogTitle>
        <MU.DialogContent>
          <MU.TableContainer component={MU.Paper}>
            <MU.Table sx={{ minWidth: 300 }} aria-label="simple table">
              <MU.TableHead>
                <MU.TableRow>
                  <MU.TableCell>Estado</MU.TableCell>
                  <MU.TableCell>Data</MU.TableCell>
                </MU.TableRow>
              </MU.TableHead>
              <MU.TableBody>
                {props.eqp.list
                  .slice(0)
                  .reverse()
                  .map((history, i) => (
                    <MU.TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <MU.TableCell component="th" scope="row">
                        {history.name}
                      </MU.TableCell>
                      <MU.TableCell>{formatDate(history.date)}</MU.TableCell>
                    </MU.TableRow>
                  ))}
              </MU.TableBody>
            </MU.Table>
          </MU.TableContainer>
          {/* {props.eqp.list
            .slice(0)
            .reverse()
            .map((history, i) => (
              <MU.DialogContentText key={i} id="alert-dialog-slide-description">
                {`${history.name} => ${formatDate(history.date)}`}
              </MU.DialogContentText>
            ))} */}
        </MU.DialogContent>
      </MU.Dialog>
    </div>
  ) : (
    ""
  );
}
