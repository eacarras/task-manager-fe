import React from "react"
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("debe agregar una nueva tarea", () => {
  render(<App />);

  const input = screen.getByLabelText("Nueva Tarea");
  const addButton = screen.getByText("Agregar");

  fireEvent.change(input, { target: { value: "Nueva tarea de prueba" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Nueva tarea de prueba")).toBeInTheDocument();
});

test("debe cambiar el estado de una tarea", () => {
  render(<App />);

  const select = screen.getByDisplayValue("To Do");
  fireEvent.change(select, { target: { value: "Completed" } });

  expect(screen.getByDisplayValue("Completed")).toBeInTheDocument();
});

test("debe eliminar una tarea", () => {
  render(<App />);

  const deleteButton = screen.getAllByText("Eliminar")[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Aprender React")).not.toBeInTheDocument();
});
