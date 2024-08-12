package com.tothemoon.stockvisualizerbackend.controller;

import com.tothemoon.stockvisualizerbackend.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/stock")
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/price/{symbol}")
    public CompletableFuture<Double> getStockPrice(@PathVariable String symbol) {
        return stockService.getRealTimeStockPrice(symbol);
    }
}