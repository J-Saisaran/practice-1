import React from 'react';
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  
  return (
   


      <div>

<IconButton color='success' aria-label="likebtn"  onClick={() => {setLike(like + 1);}}>
<Badge badgeContent={like} color="success">👍</Badge>
</IconButton>

<IconButton color='error' aria-label="Dislikebtn" onClick={() => {setDislike(dislike + 1);}}>
<Badge badgeContent={dislike} color="error">👎</Badge>
</IconButton>
      </div>

    );
}
