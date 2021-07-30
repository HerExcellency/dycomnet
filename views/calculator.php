<link rel="stylesheet" href="<?php echo base_url(); ?>/assets/css/calc.css">
<section>
<div class="container  blint">
<div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <h1 class="flay">Interest Estimator</h1>
            <div class="horizontal divider"></div>
            <p>Get an estimate of your interest in less than a minute</p>
                       <div class="row">
                            <div style="padding-bottom:50px; class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="boxes-button ask">
                                    <label class="lab"><h5>Plan</h5></label>
                                    <div class=" caret">
                                        <select onchange="myAmount()" class=" plan">
                                            <option value="quick">Reap Quick</option>
                                            <option value="plus">Reap plus</option>
                                            <option value="max">Reap Max</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-sm-12 col-lg-6">
                                <div class=" bid">
                                    <label class=" lab"><h5>Frequency</h5></label>
                                    <div class=" caret">
                                        <select onchange="myAmount()" class=" frequency">
                                            <option value="1">Daily</option>
                                            <option value="7">Weekly</option>
                                            <option value="30">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="">
                                    <label class=""><h5>Duration</h5></label>
                                    <div class="">
                                        <select onchange="myAmount()" class="duration">
                                            <!-- <option value="3">3 months</option>
                                            <option value="6">6 months</option>
                                            <option value="9">9 months</option>
                                            <option value="12">12 months</option> -->
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class=" total">
                                    <label class="">Amount to Save</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text currency" data-value="ngn">ngn</div>
                                        </div>
                                        <input autocomplete="nope" class=" order-amount money4" oninput="myAmount()" value="5000" placeholder="Amount to Save" type="number">
                                        <!-- <div class="input-group-append">
                                            <a class="btn btn-trans-border-lilac btn-md btn-chrome-alt amount-fields-toggle" data-tippy="" data-original-title="Switch to Amount to Buy">
                                                <svg class="icon flipped-h">
                                                    <use xlink:href="#exchange"></use>
                                                </svg>
                                            </a>
                                        </div> -->
                                    </div>
                                    <!-- <div class="hint d-flex justify-content-end align-items-center">
                                        <div class="text-label text-accent pt-3 conversion d-none" data-not-available="NotAvailable!">                                             </div>
                                        <div class="text-small text-right pt-3 account-balance" data-preamble="Your balance">                                                                   
                                        </div>
                                    </div> -->
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="cta inline-group mt-4">
                                    <button class="btn btn-green btn-md btn-chrome btn-shadow w-100" name="button" type="submit" onclick="myAmount()">Calculate</button>
                                </div>
                            </div>
                        </div>
                    
        </div>

                    <div class="col-lg-5 col-md-6 col-sm-12 col-12 flick">
                        <div>
                        <div class="cent totalreturn"></div>
                            <p>Total balance you'll earn with our online savings account:</h5>
                            <div class="horizontal divider"></div>
                        
                            <div class="blad">
                                <h6>Total Interest:</h6>
                                <p class="totalinterest"></p>
                            </div>
                            
                            <div>
                                <h6>Total Savings:</h6>
                                <p class="totalmoney"></p>
                            </div>               
                        </div>  
                    </div>
    </div>
    </div>

<!-- </div>
</div>
</div> -->
</section>



<script src="<?php echo base_url(); ?>/assets/js/calculator.js"></script>
<script src="<?php echo base_url(); ?>/assets/js/changestate.js"></script>
