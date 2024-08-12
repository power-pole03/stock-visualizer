package com.tothemoon.stockvisualizerbackend.service;

import com.crazzyghost.alphavantage.AlphaVantage;
import com.crazzyghost.alphavantage.timeseries.response.QuoteResponse;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class StockService {

    public CompletableFuture<Double> getRealTimeStockPrice(String symbol) {
        CompletableFuture<Double> future = new CompletableFuture<>();

        AlphaVantage.api()
                .timeSeries()
                .quote()
                .forSymbol(symbol)
                .onSuccess(response -> {
                    QuoteResponse quoteResponse = (QuoteResponse) response;
                    future.complete(quoteResponse.getPrice());
                })
                .onFailure(future::completeExceptionally)
                .fetch();

        return future;
    }
}