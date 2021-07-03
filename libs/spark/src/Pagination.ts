export const MuiPaginationStyleOverrides = {
  ul: {
    // TODO: Mui-v5 move to .MuiPaginationItem-previousNext / firstLast
    '& > li:first-child > button': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    '& > li:last-child > .MuiPaginationItem-root': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    '& > li:not(:last-child) > .MuiPaginationItem-root': {
      marginRight: -1,
    },
    '& > li:not(:first-child) > .MuiPaginationItem-root': {
      marginLeft: -1,
    },
    '& > li > .MuiPaginationItem-root.Mui-selected': {
      zIndex: 2,
    },
    '& > li > .MuiPaginationItem-root:hover, .MuiPaginationItem-root:focus, button.Mui-focusVisible': {
      zIndex: 1,
    },
  },
};

export const MuiPaginationDefaultProps = {
  variant: 'outlined' as const,
  shape: 'rounded' as const,
  size: 'large' as const,
};