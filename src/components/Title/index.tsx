import { Typography } from "@mui/material";


type Props = {
  title: string;
};
function TitleComponent({ title }: Props) {
  return (
    <div>
      <Typography
        variant="h4"
        noWrap
        component="h4"
        sx={{
          mr: 2,
          mb: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {title}
      </Typography>
    </div>
  )
}

export default TitleComponent
