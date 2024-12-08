import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: "00003",
    code: "00003",
    name: "Cladding",
    type: "Sheet",
    color: "White",
    quantity: 9994,
    brand: "Elegant",
    price: "₱ 1000.00",
    thickness: "0.5mm",
    size: "5x6 ft.",
  },
  {
    id: "00004",
    code: "00004",
    name: "Cladding",
    type: "Sheet",
    color: "Bronze",
    quantity: 10000,
    brand: "Elegant",
    price: "₱ 1000.00",
    thickness: "0.5mm",
    size: "5x6 ft.",
  },
  {
    id: "00005",
    code: "00005",
    name: "Cladding",
    type: "Sheet",
    color: "Grey",
    quantity: 10000,
    brand: "Elegant",
    price: "₱ 1000.00",
    thickness: "0.5mm",
    size: "5x6 ft.",
  },
  {
    id: "00006",
    code: "00006",
    name: "Tubular",
    type: "Steel",
    color: "random",
    quantity: 9998,
    brand: "random",
    price: "₱ 100.00",
    thickness: "default",
    size: "1x1 inch",
  },
  {
    id: "00007",
    code: "00007",
    name: "Tubular",
    type: "Steel",
    color: "random",
    quantity: 10000,
    brand: "random",
    price: "₱ 100.00",
    thickness: "default",
    size: "1x1 inch",
  },
  {
    id: "00008",
    code: "00008",
    name: "Tubular",
    type: "Steel",
    color: "random",
    quantity: 9998,
    brand: "random",
    price: "₱ 100.00",
    thickness: "default",
    size: "1x2 inch",
  },
  // New Products
  {
    id: "00009",
    code: "00009",
    name: "Beam",
    type: "Wood",
    color: "Maple",
    quantity: 15000,
    brand: "WoodWorks",
    price: "₱ 1800.00",
    thickness: "1mm",
    size: "6x4 ft.",
  },
  {
    id: "00010",
    code: "00010",
    name: "Sheet",
    type: "Aluminum",
    color: "Silver",
    quantity: 8000,
    brand: "AluTech",
    price: "₱ 2000.00",
    thickness: "1mm",
    size: "5x5 ft.",
  },
  {
    id: "00011",
    code: "00011",
    name: "Pipe",
    type: "PVC",
    color: "White",
    quantity: 12000,
    brand: "PVCPro",
    price: "₱ 600.00",
    thickness: "2mm",
    size: "3x10 ft.",
  },
  {
    id: "00012",
    code: "00012",
    name: "Plank",
    type: "Wood",
    color: "Oak",
    quantity: 9500,
    brand: "WoodTech",
    price: "₱ 1200.00",
    thickness: "0.8mm",
    size: "6x3 ft.",
  },
  {
    id: "00013",
    code: "00013",
    name: "Rod",
    type: "Steel",
    color: "Black",
    quantity: 5000,
    brand: "SteelWorks",
    price: "₱ 1500.00",
    thickness: "2.5mm",
    size: "1x12 ft.",
  },
  {
    id: "00014",
    code: "00014",
    name: "Panel",
    type: "Steel",
    color: "Galvanized",
    quantity: 11000,
    brand: "SteelMax",
    price: "₱ 2200.00",
    thickness: "3mm",
    size: "4x4 ft.",
  },
  {
    id: "00015",
    code: "00015",
    name: "Tile",
    type: "Ceramic",
    color: "White",
    quantity: 13000,
    brand: "CeramiCo",
    price: "₱ 500.00",
    thickness: "5mm",
    size: "2x2 ft.",
  },
  {
    id: "00016",
    code: "00016",
    name: "Slab",
    type: "Concrete",
    color: "Grey",
    quantity: 6000,
    brand: "ConcretePro",
    price: "₱ 2500.00",
    thickness: "4mm",
    size: "8x8 ft.",
  },
  {
    id: "00017",
    code: "00017",
    name: "Bar",
    type: "Steel",
    color: "Rusty",
    quantity: 4000,
    brand: "SteelWorks",
    price: "₱ 1000.00",
    thickness: "1.5mm",
    size: "2x5 ft.",
  },
];

export function TableDemo() {
  return (
    <>
      <h1 className="text-2xl mt-20 mb-5 text-center">Product List</h1>
      <div className="overflow-y-auto max-h-[400px] w-[90%] mx-auto my-auto flex justify-center">
        <Table className="bg-white w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Thickness</TableHead>
              <TableHead>Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.thickness}</TableCell>
                <TableCell>{product.size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
