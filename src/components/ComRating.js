import * as React from 'react';
import {Box, Modal} from '@mui/material';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import StyleConst from "../style/StyleConst";
import Button from "@mui/material/Button";
import ActionCreateRating from "../action/ActionCreateRating";

const ComRating = ({open, setOpen, toilet}) => {
  const [grade, setGrade] = React.useState(0);
  const [comment, setComment] = React.useState('');

  const sendRating = () => {
    ActionCreateRating({
      comment,
      grade,
      toilet,
    })
      .then(() => setOpen(false));
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            width: '300px',
            p: '20px',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              color: StyleConst.Colors.text
            }}
            container
            direction="column"
            alignItems="left"
          >
            <Typography
              component="legend"
              mb={2}
              fontSize={24}
              fontWeight="bold"
              color={"black"}
            >
              Rate this toilet!
            </Typography>
            <Rating
              name="simple-controlled"
              value={grade}
              onChange={(_, grade) => setGrade(grade)}
            />
            <TextField
              sx={{
                mt: 2
              }}
              id="rating-review"
              label="Give a personal feedback"
              variant="outlined"
              fullWidth
              value={comment}
              onChange={event => setComment(event.target.value)}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'rot',
                justifyContent: 'space-between',
              }}
            >
              <Button
                size="medium"
                sx={{
                  mt: 2,
                }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="medium"
                sx={{
                  mt: 2,
                }}
                onClick={sendRating}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};


export default ComRating;
