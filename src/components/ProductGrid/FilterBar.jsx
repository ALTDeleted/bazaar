import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// product.category[0].name gender
// product.category[1].name itemtype
// product.price.raw itemtype

export default function Filterbar(props) {
  const productsData = useSelector((state) => state.products);

  const { products, setProducts } = props;

  const classes = useStyles();
  const [itemType, setItemType] = React.useState("Type");
  const [itemType2, setItemType2] = React.useState("Type");

  const handleChange = (event) => {
    setItemType(event.target.value);
  };
  const handleChange2 = (event) => {
    setItemType2(event.target.value);
  };

  useEffect(() => {
    console.log("component filter");
    console.log(itemType, itemType2);
    if (productsData[0]) {
      if (itemType === "Type" && itemType2 === "Type") {
        setProducts(productsData);
        return;
      } else {
        let filteredProducts = [];
        productsData.map((product) => {
          if (itemType !== "Type" && itemType2 !== "Type") {
            if (
              ((product.categories[1] &&
                product.categories[1].name === itemType) ||
                product.categories[0].name === itemType) &&
              ((product.categories[1] &&
                product.categories[1].name === itemType2) ||
                product.categories[0].name === itemType2)
            )
              filteredProducts.push(product);
          } else if (itemType === "Type") {
            if (
              product.categories[0].name === itemType2 ||
              (product.categories[1] &&
                product.categories[1].name === itemType2)
            )
              filteredProducts.push(product);
          } else {
            if (
              product.categories[0].name === itemType ||
              (product.categories[1] && product.categories[1].name === itemType)
            )
              filteredProducts.push(product);
          }
        });
        if (filteredProducts[0]) setProducts(filteredProducts);
      }
    }
  }, [itemType, itemType2, productsData]);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={itemType}
          onChange={handleChange}
          placeholder={"Type"}
        >
          <MenuItem value={"Type"}>All</MenuItem>
          <MenuItem value={"Shirt"}>Shirt</MenuItem>
          <MenuItem value={"Shoes"}>Shoes</MenuItem>
          <MenuItem value={"Tops"}>Tops</MenuItem>
          <MenuItem value={"Pants"}>Pants</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={itemType2}
          onChange={handleChange2}
          placeholder={"Type"}
        >
          <MenuItem value={"Type"}>All</MenuItem>
          <MenuItem value={"Men"}>Men</MenuItem>
          <MenuItem value={"Women"}>Women</MenuItem>
          <MenuItem value={"Home Decor"}>Decor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
